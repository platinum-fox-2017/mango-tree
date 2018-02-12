"use strict"

// release 1

const {FruitTree, Fruit} = require('./fruit_tree.js');

class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor() {
      super()
    this._mature_age = Math.floor((Math.random() * 8) + 5);
    this._max_health = Math.floor((Math.random() * 25) + 11);
  }
}

class Apple extends Fruit {
  // Produce a Pear
  constructor() {
      super()
    }
}

// driver code untuk release 0
let pearTree = new PearTree()
console.log(`The Pear Tree is Alive ! SMILE :D`)
console.log('Maturity age: '+ pearTree._mature_age);
console.log('Maximum age : '+ pearTree._max_health);
  do {
        pearTree.grow();
        pearTree.produceFruit();
        pearTree.harvest();
      console.log(`[Year ${pearTree.age} Report] Height = ${pearTree._height} | Fruits harvested = ${pearTree.harvested}`)
    } while (pearTree._health != false)
console.log(`The Pear Tree has met its end. :C`)

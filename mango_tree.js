"use strict"

// release 0
const {FruitTree, Fruit} = require('./fruit_tree.js');

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super()
    // this._mature_age = Math.floor((Math.random() * 8) + 2);
    // this._max_health = Math.floor((Math.random() * 20) + 15);
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree()
console.log(`The Mango Tree is Alive ! SMILE :D`)
console.log('Maturity age: '+mangoTree._mature_age);
console.log('Maximum age : '+mangoTree._max_health);
  do {
      mangoTree.grow();
      mangoTree.produceFruit();
      mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree._health != false)
console.log(`The Mango Tree has met its end. :C`)

// console.log(mangoTree.age)



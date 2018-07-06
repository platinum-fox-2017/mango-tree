'use strict'

const Tree = require('./fruit-tree');

class MangoTree extends Tree {

  // Initialize a new MangoTree
  constructor(maxHeight, matureAge, prodAge, maxAge) {
    super()
    this.prodAge = prodAge || 3
    this.maxHeight = maxHeight || 50
    this.matureAge = matureAge || 28
    this.maxAge = maxAge || 30
  }

}

let mangoTree = new MangoTree()
// console.log(mangoTree.produceMangoes());
console.log(`The Tree is Alive!! :)`);
 do {
   mangoTree.grow();
   mangoTree.produceFruits();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
 } while (mangoTree._healthyStatus != false)
 console.log(`Good Bye Tree, thank you for your fruits... :sad:`);
 console.log(`====================================================`);

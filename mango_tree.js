"use strict"
const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(age, height, fruits, healthyStatus, harvested) {
    super()
  }
}

  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceFruit();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  } 
  while (mangoTree.healthyStatus != false)
  console.log('The tree has met its end :('); 
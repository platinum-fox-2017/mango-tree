"use strict"
const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree {
    // Initialize a new PearTree
    constructor(age, height, fruits, healthyStatus, harvested) {
        super()
    }
}

//  driver code untuk release 0
let pearTree = new PearTree()
do {
    pearTree.grow();
    pearTree.produceFruit();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
}
while (pearTree.healthyStatus != false)
console.log('The tree has met its end :('); 
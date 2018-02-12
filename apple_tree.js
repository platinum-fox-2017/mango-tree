"use strict"
const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
    // Initialize a new AppleTree
    constructor(age, height, fruits, healthyStatus, harvested) {
        super()
    }
}

//  driver code untuk release 0
let appleTree = new AppleTree()
do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
}
while (appleTree.healthyStatus != false)
console.log('The tree has met its end :(');

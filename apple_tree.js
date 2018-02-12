"use strict"

const FruitTree = require('./fruit_tree');
class AppleTree extends FruitTree.FruitTree {
    constructor(obj) {
        super(obj)
    }
}

let obj = {
    name: 'Apple',
    age: 0,
    height: 0,
    fruits: 0,
    healtyStatus: true,
    harvested: '',
    maxAge: 20,
    maxAgeForHeight: 15,
    growHeight: 0.32
}
let appleTree = new AppleTree(obj)
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harverst();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus)

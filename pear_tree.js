"use strict"

const FruitTree = require('./fruit_tree');
class PearTree extends FruitTree.FruitTree {
    constructor(obj) {
        super(obj)
    }
}

let obj = {
    name: 'Pear',
    age: 0,
    height: 0,
    fruits: 0,
    healtyStatus: true,
    harvested: '',
    maxAge: 20,
    maxAgeForHeight: 15,
    growHeight: 0.32
}
let pearTree = new PearTree(obj)
do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harverst();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healtyStatus)

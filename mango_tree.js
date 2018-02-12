"use strict"

const FruitTree = require('./fruit_tree');
class MangoTree extends FruitTree.FruitTree {
  constructor(obj) {
    super(obj)
  }
}

let obj = {
  name: 'Mango',
  age: 0,
  height: 0,
  fruits: 0,
  healtyStatus: true,
  harvested: '',
  maxAge: 20,
  maxAgeForHeight: 15,
  growHeight: 0.32
}
let mangoTree = new MangoTree(obj)
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harverst();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus)

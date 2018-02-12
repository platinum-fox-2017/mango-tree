"use strict"

const {MangoTree,Mango} = require('./mangoTree.js')
const {AppleTree,Apple} = require('./appleTree.js')
const {PearTree,Pear} = require('./pearTree.js')

// release 0

  // driver code untuk release 0
//   let mangoTree = new MangoTree(10,8,5)
//   do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harverst();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthyStatus !== false)
 

// console.log(" ******************************************* ")

// Release 1
let appleTree = new AppleTree(7,7,5)
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harverst();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus !== false)

console.log(" ******************************************* ")
// Release 2
// let pearTree = new PearTree(5,5,5)

// do {
//   pearTree.grow();
//   pearTree.produceMangoes();
//   pearTree.harverst();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus !== false)


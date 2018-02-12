const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PearTree = require('./pear_tree')

// Mango
console.log(`The Mango tree is alive! :smile:`)
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthyStatus != false)
console.log(`----------------------The Mango tree has met its end! :sad:-------------------`)
  

// Apple
console.log(`The Apple tree is alive! :smile:`)
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthyStatus != false)
console.log(`----------------The Apple tree has met its end! :sad:--------------------`)

//Pear
console.log(`The Pear tree is alive! :smile:`)
let pearTree = new PearTree()
do {
    pearTree.grow();
    pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} cm | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthyStatus != false)
console.log(`The Pear tree has met its end! :sad:`)
// // Release 2
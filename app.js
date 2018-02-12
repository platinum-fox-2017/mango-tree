const MangoTree = require('./mango_tree.js')
const AppleTree = require('./apple_tree.js')
const PearTree = require('./pear_tree.js')


let mangoTree = new MangoTree()
console.log(`=================== MANGO TREE ================`)
console.log(`the Mango tree is alive :) :)`)
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/10} M | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log(`the Mango tree is fucking diee :") :")`)

//====================================================================================================================

console.log(`============== Apple Tree ========================== `)
let appleTree = new AppleTree()
console.log(`the Apple tree is alive :) :)`)
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/10} M | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
console.log(`the Apple tree is fucking diee :") :")`)

//=======================================================================================================================

console.log(`============== Pear Tree ========================== `)
let pearTree = new PearTree()
console.log(`the Pear tree is alive :) :)`)
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height/10} M | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)
console.log(`the Pear tree is fucking diee :") :")`)

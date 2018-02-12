const MangoTree = require('./mango_tree');
const AppleTree = require('./apple_tree');
const PearTree = require('./pear_tree');

let mangoTree = new MangoTree()
console.log('Pohon Mangga hidup! :D');
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log('Pohon Mangga mati :(');

console.log('===============================BATAS SUCI===============================');

let appleTree = new AppleTree()
console.log('Pohon Apel hidup! :D');
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/100} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
console.log('Pohon Apel mati :(');

console.log('===============================BATAS SUCI===============================');

let pearTree = new PearTree()
console.log('Pohon Pear hidup! :D');
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height/100} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)
console.log('Pohon Pear mati :(');

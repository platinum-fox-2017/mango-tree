const AppleTree = require('./apple_tree')
const ManggoTree = require('./mango_tree')
const PearTree = require('./pear_tree')


let appleTree = new AppleTree()
let manggoTree = new ManggoTree()
let pearTree = new PearTree()

do {
    pearTree.grow();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height/100} M | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healtyStatus != false)


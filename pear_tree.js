const {FruitTree,Fruit} = require ('./fruit_tree')

class PearTree extends FruitTree{
  constructor(){
    super()
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

let pearTree = new PearTree()
console.log('LETS HARVEST SOME MANGO')
do {
   pearTree.grow();
   pearTree.produceFruits();
   pearTree.harvest();
   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height/100} m | Fruits harvested = ${pearTree.harvested}`)
 } while (pearTree.healthy != false)

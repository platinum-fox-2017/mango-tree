const {FruitTree,Fruit} = require ('./fruit_tree')

class AppleTree extends FruitTree{
  constructor(){
    super()
  }
}
class Apple extends Fruit{
  constructor(){
    super()
  }
}

let appleTree = new AppleTree()
console.log('LETS HARVEST SOME APPLE')
do {
  appleTree.grow();
  appleTree.produceFruits();
  // console.log(appleTree.fruits)
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/100} m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthy != false)

const f = require ('./fruit_tree')
const FruitTree = f.FruitTree
const Fruit = f.Fruit

class MangoTree extends FruitTree{
  constructor(){
    super()
  }
}
class Mango extends Fruit{
  constructor(){
    super()
  }
}

let mangoTree = new MangoTree()
console.log('LETS HARVEST SOME MANGO')
do {
   mangoTree.grow();
   mangoTree.produceFruits();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthy != false)

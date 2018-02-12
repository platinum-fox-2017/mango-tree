const {FruitTree,Fruit} = require('./super')

class MangoTree extends FruitTree{
    constructor(maxHeight,maxAge,maxFruits){
        super(maxHeight,maxAge,maxFruits)
    }
}

class Mango extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {MangoTree,Mango}
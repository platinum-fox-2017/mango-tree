const {FruitTree,Fruit} = require('./super')

class PearTree extends FruitTree{
    constructor(maxHeight,maxAge,maxFruits){
        super(maxHeight,maxAge,maxFruits)
    }
}

class Pear extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {PearTree,Pear}
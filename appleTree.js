const {FruitTree,Fruit} = require('./super')

class AppleTree extends FruitTree{
    constructor(maxHeight,maxAge,maxFruits){
        super(maxHeight,maxAge,maxFruits)
    }
}

class Apple extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {AppleTree,Apple}
const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {

    // Initialize a new AppleTree
    constructor() {
        super('AppleTree')
    }
}

module.exports = AppleTree

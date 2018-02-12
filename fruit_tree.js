class FruitTree {
    constructor(age, height, fruits, healthyStatus, harvested) {
        this._age = age || 0
        this._height = height || 1
        this._fruits = []
        this._healthyStatus = true
        this._harvested = 0
    }

    get age() {
        return this._age
    }

    get height() {
        return this._height
    }

    get fruits() {
        return this._fruits
    }

    get healthyStatus() {
        return this._healthyStatus
    }

    get harvested() {
        return this._harvested
    }

    grow() {
        this._age++
        if (this._height < 8) {
            this._height += Math.floor(Math.random() * 2)
        }

        if (this._age >= 20) {
            this._healthyStatus = false
        }
    }


    produceFruit() {
        this._fruits = []
        let fruits = Math.floor(Math.random() * 10);
        for (let i = 0; i < fruits; i++) {
            let produceFruit = new Fruit
            this._fruits.push(produceFruit)
        }
    }

    harvest() {
        let goodFruits = 0;
        let badFruits = 0;
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i]._healthyStatus == 'good') {
                goodFruits++
            } else {
                badFruits++
            }
        }

        this._harvested = goodFruits + badFruits + ` (good: ${goodFruits} bad: ${badFruits})`;
    }
}

class Fruit {
    constructor() {
        this._healthyStatus = this.quality()
    }

    quality() {
        let produceFruit = Math.floor(Math.random() * 10)
        if (produceFruit > 5) {
            return 'good'
        } else {
            return 'bad'
        }
    }
}

module.exports = FruitTree
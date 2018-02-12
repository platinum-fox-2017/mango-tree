"use strict"

class FruitTree {
    constructor(obj) {
        this._age = obj.age
        this._height = obj.height
        this._fruits = obj.fruits
        this._healtyStatus = obj.healtyStatus
        this._harvested = obj.harvested
        this.maxAge = obj.maxAge
        this.name = obj.name
        this.maxAgeForHeight = obj.maxAgeForHeight || this.maxAge
        this.growHeight = obj.growHeight || 1
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
    get healtyStatus() {
        return this._healtyStatus
    }
    get harvested() {
        return this._harvested
    }
    
    grow() {
        this._age += 1
        if (this.age >= this.maxAge) {
            this._healtyStatus = false
        } else if (this.age <= this.maxAgeForHeight) {
            this._height += this.growHeight //+= Number(Math.random()*2)
        }
    }
    
    produceFruits() {
        let random = Math.ceil(Math.random() * this._height)
        this._fruits = random
    }
    
    harverst() {
        let good = Math.ceil(Math.random() * this.fruits)
        let bad = this.fruits - good
        let obj = new Fruit(good, bad)
        this._harvested = `${this.fruits} ${this.name} (${obj.good} good, ${obj.bad} bad)`
    }
}

class Fruit {
    constructor(g, b) {
        this.good = g
        this.bad = b
    }
}
module.exports = {
    FruitTree,
    Fruit
};

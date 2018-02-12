const Fruit = require('./fruit')

class Tree {

  // Initialize a new Tree
  constructor() {
    this._age = 0
    this._height = 0
    this._max_fruits = 0
    this._fruits = []
    this._harvested = null
    this._healthyStatus = true
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


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= 25){ //pohon tumbuh sampai umur 25
      this._height += Math.floor(Math.random()*50)
    }
    if(this._age >= 30){ //pohon mati saat umur lebih dari 30
      this._healthyStatus = false
    }
    return this
  }

  // Produce some fruits
  produceFruits() {
    if(this._age >= 3){ //pohon berbuah saat umur 3
      this._max_fruits += Math.floor(Math.random()*30)
    }
    for(let i=0; i<this._max_fruits; i++){
      let fruit = new Fruit
      this._fruits.push(fruit)
    }
    return this
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i=0; i<this._max_fruits; i++){
      if(this._fruits[i]._quality === 'good'){
        good++
      }
      else {
        bad++
      }
    }
    this._max_fruits = 0
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
    return this
  }

}

// Release 1
class AppleTree {}
class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}

module.exports = Tree

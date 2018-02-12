"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvested = 0
    this._healthyStatus = true
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._max_fruits
  }

  get healtyStatus() {
    return this._fruits
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++

    if (this._age > 1) {
      this._fruits += Math.floor(Math.random() * 30)
    }
    if (this._age < 10 ) {
      this._height += (Math.floor(Math.random() * 180))
    }
    if (this._age > 10) {
      this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    let mango = new Mango()
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (var i = 0; i < this._fruits; i++) {
      let quality = Math.floor(Math.random() * 10)
      if (quality < 5) {
        bad++
      }
      else {
        good++
      }
    }
    this._fruits = 0
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
    return this
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = 'good' || 'bad'
  }
}

let mangoTree = new MangoTree()
do {
 mangoTree.grow();
 mangoTree.produceMangoes();
 mangoTree.harvest();
 console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height/100} m| Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthyStatus != false)
console.log('the tree has met its end. :sad:');

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}

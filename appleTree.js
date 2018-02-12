"use strict"
const Tree = require('./tree')
const Apple = require('./apple')

class AppleTree extends Tree{
  constructor() {
    super()
  }


  // Grow the appleTree
  grow() {
    this._age++
    if (this._age < 10 ) {
      this._height += (Math.floor(Math.random() * 180))
    }
    if (this._age > 20) {
      this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceApples() {
    let buah = 0
    buah += Math.floor(Math.random() * 10)
    for (var i = 0; i < buah; i++) {
      let apple = new Apple
      this._fruits.push(apple)
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    let panen = this._fruits
    for (var i = 0; i < panen.length; i++) {
      if (panen[i].quality === 'good') {
        good++
      }
      else {
        bad++
      }
    }
    this._harvested = `${good + bad} (${good} good ${bad} bad)`
    return this
  }
}




let appleTree = new AppleTree()
do {
 appleTree.grow();
 appleTree.produceMangoes();
 appleTree.harvest();
 console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height/100} m| Fruits harvested = ${appleTree.harvested}`)
} while (appleTree._healthyStatus != false)
console.log('the appleTree has met its end. :sad:');

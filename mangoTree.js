"use strict"
const Tree = require('./tree')
const Mango = require('./mango')

class MangoTree extends Tree{
  constructor() {
    super()
  }


  // Grow the mangoTree
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
      let mango = new Mango
      this._fruits.push(mango)
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




let mangoTree = new MangoTree()
do {
 mangoTree.grow();
 mangoTree.produceMangoes();
 mangoTree.harvest();
 console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height/100} m| Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree._healthyStatus != false)
console.log('the mangoTree has met its end. :sad:');

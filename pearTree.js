"use strict"
const Tree = require('./tree')
const Pear = require('./pear')

class PearTree extends Tree{
  constructor() {
    super()
  }


  // Grow the pearTree
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
  producePears() {
    let buah = 0
    buah += Math.floor(Math.random() * 10)
    for (var i = 0; i < buah; i++) {
      let pear = new Pear
      this._fruits.push(pear)
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




let pearTree = new PearTree()
do {
 pearTree.grow();
 pearTree.produceMangoes();
 pearTree.harvest();
 console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height/100} m| Fruits harvested = ${pearTree.harvested}`)
} while (pearTree._healthyStatus != false)
console.log('the pearTree has met its end. :sad:');

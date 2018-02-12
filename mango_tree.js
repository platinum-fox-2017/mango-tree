"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._healthy = true
    this._quantity = []
  }

  randomGrowth(){
    return +((Math.round(Math.random()*15))/10).toPrecision(1)
  }
  get age() {
    return this._age
  }
  get height() {
    return this._height
  }
  get healtyStatus() {
    return this._healthy
  }
  get harvested() {
    return this._quantity.length
  }

  // Get current states here
  // Grow the tree
  grow() {
    if (this._age == 21){
      console.log('The tree has met its end. :sad:')
      return this._healthy = false
    }
    this._age++
    if (this._age < 12){
      this._height += this.randomGrowth()
    }
    // 3. pohon dapat berbuah ketika sudah mencapai mature age
    if (this._age > 5){
      let harvess = this.harvest()
      console.log(`[Year ${this._age} Report] Height = ${this._height} | Fruits harvested = ${this.harvested} (${harvess[0]} good, ${harvess[1]} bad)`)
    } else {
      console.log(`[Year ${this._age} Report] Height = ${this._height} | Fruits harvested = 0 (0 good, 0 bad)`)
    }
    this._quantity = []
  }

  // Produce some mangoes
  produceMangoes() {
    return Math.round(Math.random()*20)
  }

  // Get some fruits
  harvest() {
    let mango = new Mango()
    let good = 0
    let bad = 0
    for(let i = 0; i < this.produceMangoes(); i++){
      this._quantity.push(mango.quality())
    }

    for (let j = 0; j < this._quantity.length; j++){
      (this._quantity[j] == 1)? good++ : bad++
    }
    return [good, bad]
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
  quality(){
    return Math.round(Math.random())
  }
}

  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
     mangoTree.grow();
     mangoTree.harvest();
  } while (mangoTree._healthy != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

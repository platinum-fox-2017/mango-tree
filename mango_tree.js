"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruitMax = 10
    this._fruits = []
    this._harvested = 0
    this._maxHeightGrow = 10
    this._maxAge = 14
    this._status = this.status
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(1)
  }

  get fruits() {
    return this._fruits.join(',')
  }

  get healthyStatus() {
    this.status = this._age <= this._maxAge
    return this.status
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= this._maxHeightGrow){
      this._height += Math.random()*2
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    let fruitsCount = this._fruits.length
    let fruitsQuality = {
      good: 0,
      bad: 0
    }

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        fruitsQuality.good++
      else{
        fruitsQuality.bad++
      }
      this._fruits.shift()
    }
    // console.log(this._fruits[0])
    return this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
  }

}


   // driver code untuk release 0
  let mangoTree = new MangoTree()
  console.log('The tree is alive! :smile:')
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthyStatus != false)
   console.log('The tree has met its end! :sad:')


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

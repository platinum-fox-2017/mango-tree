"use strict"

// release 0

class FruitTree {

  // Initialize a new fruitTree
  constructor(age, height, fruitMax, maxHeightGrow,maxAge) {
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
  produceFruits() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Fruit())
    }
    return this._fruits
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
      else
      {
        fruitsQuality.bad++
      }
      this._fruits.shift()
    }
    // console.log(this._fruits[0])
    return this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
  }
}

class Fruit {
  // Produce a mango
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
  }

}


   // driver code untuk release 0
  // console.log('The tree is alive! :smile:')
  // let fruitTree = new FruitTree()
  // do {
  //   fruitTree.grow();
  //   fruitTree.produceFruits();
  //   fruitTree.harvest();
  //   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
  //  } while (fruitTree.healthyStatus != false)
  //  console.log('The tree has met its end! :sad:')


// // Release 1
class AppleTree extends FruitTree {
  constructor(){
    super()
    this._maxHeightGrow = 7
    this._maxAge = 20
    this._taste = ''
  }
  get taste(){
    return this._taste
  }
  produceFruits() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Apple())
    }
    return this._fruits
  }
  produceTaste(){
    let sweet = 0
    let sour = 0
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].taste === 'sweet') {
        sweet++
      }
      else {
        sour++
      }
    }
    this._taste = `${sweet} sweet, ${sour} sour`

  }

}

class Apple extends Fruit{
  constructor(){
    super()
    this._taste = this.taste()
  }
  taste(){
    let value = Math.round(Math.random()*10)
    if(value < 5) {
      return `sweet`
      }
      else {
      return `sour`
    }
  }
}

// // Release 2
// class FruitTree {}
// class Fruit {}
console.log('The tree is alive! :smile:')
let appleTree = new AppleTree()
let apple = new Apple()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  appleTree.produceTaste()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested} | Taste = ${appleTree.taste}`)
 } while (appleTree.healthyStatus != false)
 console.log('The tree has met its end! :sad:')

"use strict"

// Release 2
class FruitTree {
  constructor() {
    this.name = 'Fruits'
    this._age = 0
    this._height = 0
    this._healthy = true
    this._quantity = []
    this._maxAge = 20
    this._maxHeight = 10
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
  randomGrowth(){
    return +((Math.round(Math.random()*15))/10).toPrecision(1)
  }
  // Get current states here
  // Grow the tree
  grow() {
    if (this._age == this._maxAge){
      console.log('The tree has met its end. :sad:')
      return this._healthy = false
    }
    this._age++
    if (this._age < 12 || this._height <= this._maxHeight){
      this._height += this.randomGrowth()
    }
    // 3. pohon dapat berbuah ketika sudah mencapai mature age
    if (this._age > 5){
      let harvess = this.harvest()
      console.log(`[Year ${this._age} Report] Height = ${this._height} | ${this.name} harvested = ${this.harvested} (${harvess[0]} good, ${harvess[1]} bad)`)
    } else {
      console.log(`[Year ${this._age} Report] Height = ${this._height} | ${this.name} harvested = 0 (0 good, 0 bad)`)
    }
    this._quantity = []
  }
   // Produce some mangoes
  produceFruits() {
    return Math.round(Math.random()*20)
  }

  // Get some fruits
  harvest() {
    let fruit = new Fruit()
    let good = 0
    let bad = 0
    for(let i = 0; i < this.produceFruits(); i++){
      this._quantity.push(fruit.quality())
    }

    for (let j = 0; j < this._quantity.length; j++){
      (this._quantity[j] == 1)? good++ : bad++
    }
    return [good, bad]
  }
}

class Fruit {
  constructor() {
  }
  quality(){
    return Math.round(Math.random())
  }
}

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super()
    this.name = 'Mangoes'
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
  super()
  }
  
}

class AppleTree extends FruitTree{
  constructor(){
    super()
    this.name = 'Apples'
    this._maxAge = 40
    this._maxHeight = 6
  }
  randomGrowth(){
    return +((Math.round(Math.random()*5))/10).toPrecision(1)
  }
  produceFruits() {
    return Math.round(Math.random()*200)
  }
}

class Apple extends Fruit{
  constructor(){
    super()
  }
}


class PearTree extends FruitTree{
  constructor(){
    super()
    this.name = 'Pears'
    this._maxAge = 15
    this._maxHeight = 4
  }
  randomGrowth(){
    return +((Math.round(Math.random()*3))/10).toPrecision(1)
  }
  produceFruits() {
    return Math.round(Math.random()*80)
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

// driver code untuk release 0

// let mangoTree = new MangoTree()
// do {
//     mangoTree.grow();
//     mangoTree.harvest();
// } while (mangoTree._healthy != false)

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.harvest();
} while (appleTree._healthy != false)

// let pearTree = new PearTree()
// do {
//   pearTree.grow();
//   pearTree.harvest();
// } while (pearTree._healthy != false)

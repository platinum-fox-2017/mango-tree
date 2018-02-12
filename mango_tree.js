"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.totalFruit = 0
    this.harvestFruit = 0
    this.healthyStatus = true
  }

  get age() {
    return this.age
  }

  get height() {
    return this.height

  }

  get fruits() {
    return this.totalFruit
  }

  get healthyStatus() {
    return this.healthyStatus
  }

  get harvested() {
    return this.harvestFruit

  }
  // Get current states here

  // Grow the tree
  grow() {
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.qualityFruit = this.quality_check()
  }
  quality_check(){
    let random = Math.round(Math.random()*1)
    // console.log(random,'ini random')
    if(random === 0){
      this.qualityFruit = 'Ripe'
    }else{
      this.qualityFruit = 'Rotten'
    }
    return this.qualityFruit
  }
}


// driver code untuk release 0
// console.log(`The tree is alive! :smile:`)
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harverst();
//   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
//   } while (mangoTree.healthyStatus != false)
// console.log(`The tree has met its end! :sad:`)
  
let mangoo = new Mango()
console.log(mangoo.quality_check())
// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
